SHELL := /bin/bash # This line directly tells the make file to use bash syntax.

all:
	echo "make install <- Main installation ..."
	echo "refresh_main_and_clean_old_branches <- Delete branches and switch to main."

	echo "run make -s .......................to surpress nafty raw echo commands"

install:
	npm install

deploy: 
	git fetch --prune
	git subtree push --prefix public origin gh-pages
	# git push origin --delete gh-pages
	# git branch -D gh-pages
	# git branch gh-pages HEAD
	# git filter-branch -f --subdirectory-filter public -- gh-pages
	# git push --set-upstream origin gh-pages
	git fetch --prune

edeploy: 
	git branch -D gh-pages
	git branch gh-pages HEAD
	git filter-branch -f --subdirectory-filter public -- gh-pages
	git push --set-upstream origin gh-pages
	git fetch --prune

run:
	npm run check
	npm run dev
	
build:
	npm run check
	npm run build
	

refresh_main_and_clean_old_branches:
	git fetch --prune
	git checkout -q main && git pull
	git checkout -q main && git for-each-ref refs/heads/ "--format=%(refname:short)" | while read branch; do mergeBase=$$(git merge-base main $$branch) && [[ $$(git cherry main $$(git commit-tree $$(git rev-parse $$branch^{tree}) -p $$mergeBase -m _)) == "-"* ]] && git branch -D $$branch; done
	
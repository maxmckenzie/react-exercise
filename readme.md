# React Webpack OpenAPI Parser
[ ![Codeship Status for maxmckenzie/react-exercise](https://codeship.com/projects/9c0ad400-5a8b-0134-5efc-1e1a7cd1493b/status?branch=master)](https://codeship.com/projects/173187)

Install homebrew
`/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`

Install Node
`brew install npm`

Install direnv
`brew install direnv`

> add the following to you ~/.bashrc
> `eval "$(direnv hook bash)"`
> or if you use zsh
> add the following to you ~/.zshrc
> `eval "$(direnv hook zsh)"`

Checkout the project
`git clone https://github.com/maxmckenzie/react-exercise.git`

Install eslint globally
`npm install -g eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react`

> these need to be global for your text editor to hook
> [see Sublime Text set up](http://jonathancreamer.com/setup-eslint-with-es6-in-sublime-text/)

Install
`npm install`

Run webpack development server and mocha tests
`npm run dev`
> this watch for changes in the src directory

# ToDo
- Production webpack config and heroku deployment

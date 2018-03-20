# react_python_simple_setup
A very simple setup with React frontend and Python backend. Just to test api request/response.

### Steps
Create directory
cd into that directory
npm init -y to create package.json with default values
npm i --save-dev webpack webpack-cli babel-loader babel-preset-env to install packages as development dependencies
create a webpack.config.js in root-folder
configure webpack.config.js as in example file

Setup React
npm i --save react react-dom
create a static folder
setup files as in example

Setup Python
Install python on your machine (current 3.6.5)
create a server folder at the same level as static
cd into that folder
in commanline run:
pip install virtualenv
pip install virtualenvwrapper
pip install flask

Create a server.py file in server folder
Setup file as in example


Run frontend
npm run watch

Run backend
python server.py




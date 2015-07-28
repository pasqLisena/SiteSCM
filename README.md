# SiteSCM
WebSite for Santa Cecilia Molfetta

### Instruction
Pre-installation:
* Install [Ruby](https://www.ruby-lang.org)
* Install [Node.JS](https://nodejs.org/)
* From command line, install globally some Ruby gems and NPM packages
<pre>
  gem install sass --global
  gem install compass --global
  npm install bower --global
  npm install gulp --global
</pre>


Installation:
* In the project directory, run
<pre>
  npm install
  bower install
</pre>
* For run in developer mode
<pre>
  gulp
</pre>
* For build in production mode (some things still "work in progress")
<pre>
  gulp --type production
</pre>
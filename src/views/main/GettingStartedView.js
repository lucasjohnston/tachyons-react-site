import React from 'react';


const GsCode = () => {
  return (
    <div>
      <h1 className="mt0 f5 f3-ns">Getting Started</h1>
      <p className="f5 measure lh-copy">
        Copy the line of code below and paste it in the head of the html file(s) you want to include tachyons in.
      </p>
      <pre className="pre black-70" style={{overflow: 'auto'}}><code
        className="code f6 dib pa2 bg-black-70 washed-green"
        style={{fontSize: '14px'}}>&lt;link rel="stylesheet" href="https://unpkg.com/tachyons@4.10.0/css/tachyons.min.css"/&gt;</code></pre>
      <p className="mt4"><b>or</b> install via npm</p>
      <pre className="pre black-70" style={{overflow: 'auto'}}><code
        className="code f6 dib pa2 bg-black-70 washed-green"
        style={{fontSize: '14px'}}>npm install --save-dev tachyons@4.10.0</code></pre>
      <p className="mt4"><b>or</b> grab all the source files and build+develop locally</p>
      <pre className="pre" style={{overflow: 'auto'}}><code className="code f6 dib pa2 bg-black-70 washed-green"
                                                            style={{fontSize: '14px'}}>git clone git@github.com:tachyons-css/tachyons.git
cd tachyons
npm install &amp;&amp; npm start
</code></pre>
      <h3 className="f5 f3-ns mt4 fw6">Prototyping template</h3>
      <p className="lh-copy measure f6">
        This template is always linked to the most up to date version of Tachyons.
        Save this file to your computer to start prototyping right away without worrying
        about setting up a dev environment. You can open the file in a web browser and view
        your changes.
      </p>
      <div className="overflow-auto">
        <code className="pre f6">
          &lt;!DOCTYPE html&gt;
          &lt;html lang="en"&gt;
          &lt;title&gt; &lt;/title&gt;
          &lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;
          &lt;link rel="stylesheet" href="https://unpkg.com/tachyons/css/tachyons.min.css"&gt;
          &lt;body&gt;

          &lt;/body&gt;
          &lt;/html&gt;
        </code>
      </div>
    </div>
  );
};

const Proj = () => {
  return (
    <section className="bt b--black-10 pv5 mt5 cf">
      <div className="fl-l w-100 w-50-l pr4-ns">
        <h3 className="f5 f3-ns mt0">Start a New Project</h3>
        <p className="f6 f5-ns measure lh-copy mb4 mt0">
          Get setup and running with this ~7 minute screencast. Download the
          project and learn how to customize the tachyons source files and
          recompile the css using the postcss build system.
        </p>
      </div>
      <div className="fl-l w-100 w-50-l">
        <div className="aspect-ratio aspect-ratio--8x5">
          <iframe title='video1' className="aspect-ratio--object" src="https://player.vimeo.com/video/174698456"
                  frameBorder="0"
                  webkitallowfullscreen mozallowfullscreen allowFullScreen></iframe>
        </div>
      </div>
    </section>
  );
};

class GettingStarted extends React.Component {
  render() {
    return (
      <article className="bt b--black-10 bg-washed-blue black-70 ph3 ph5-ns pv4 pv5-ns" id="getting-started">
        <div className="mw9 center">
          <GsCode/>
          <Proj/>
        </div>
      </article>
    );
  }
}

export default GettingStarted;
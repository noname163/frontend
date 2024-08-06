const { BrowserRouter, Route, Link, Switch } = ReactRouterDOM;
const { useState, useEffect } = React;


function About() {
    const [content, setContent] = useState('');

    useEffect(() => {
        fetch('/html/about.html')
            .then(response => response.text())
            .then(html => setContent(html));
    }, []);

    return <div dangerouslySetInnerHTML={{ __html: content }} />;
}

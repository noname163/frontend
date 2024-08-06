const { BrowserRouter, Route, Link, Switch } = ReactRouterDOM;
const { useState, useEffect } = React;

function App() {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/dashboard">
                        <Dashboard />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

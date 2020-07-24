import Declare from "./lib/module";
import App from "./app/app";
import Button from "./app/button";
import Parent from "./app/parent";

Declare(
    [
        {component: App, tag: App.tag},
        {component: Parent, tag: Parent.tag},
        {component: Button, tag: Button.tag},
        
    ]
)
import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app';
import { set as setDb } from "./services/db";

var app: any = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        document.removeEventListener('deviceready', this.onDeviceReady.bind(this), false);
        var db = window.sqlitePlugin.openDatabase({
            name: 'my.db',
            location: 'default'
        }, (d) => alert(JSON.stringify(d)), (e) => alert(JSON.stringify(e)));
        window.React = React;
        setDb(db);
        ReactDom.render(<App />, document.getElementById("wrapperContainer"));
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
    }
};




app.initialize();

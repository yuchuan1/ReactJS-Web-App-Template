var MyComponent = React.createClass({
    render: function(){
        return (
            <h1>Hey, {this.props.name}!</h1>
        );
    }
});

React.renderComponent(<MyComponent name="Good Day!" />,
    document.getElementById('reactExample')
);

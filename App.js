// const element = React.createElement('h1', {id: 'heading'}, "Hello World from React!");
const reactRoot = ReactDOM.createRoot(document.getElementById('root'));


/**
 * <div id='parent'> 
 *      <div id='child'>
 *          <h1> This is h1 tag </h1>
 *          <h2> This is h2 tag </h2>
 *      </div>
 *      <div id='child2'>
 *          <h1> This is h1 tag </h1>
 *          <h2> This is h2 tag </h2>
 *      </div>
 * </div>
 */

const element = React.createElement('div', { id: 'parent', a: 'b', c: 'd', raja: 'Raja' },
    [React.createElement('div', { id: 'child' },
        [React.createElement('h1', {}, 'This is a h1 tag'), React.createElement('h2', {}, 'This is a h2 Tag')]
    ),
    React.createElement('div', { id: 'child2' },
        [React.createElement('h1', {}, 'This is a h1 tag'), React.createElement('h2', {}, 'This is a h2 tag')]
    )
    ]
)

console.log('Element: ', element);

reactRoot.render(element);
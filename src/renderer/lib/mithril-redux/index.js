import m from 'mithril';

export function connect(select) {
  return function connectWithWrapper(Container) {
    return {
      controller(props, children) {
        // console.debug('Connector:controller', props, children);
        const {dispatch, getState} = props;

        this.dispatch = dispatch;
        this.getState = getState;
      },

      view(controller, props, children) {
        // console.debug('Connector:view', controller, props, children);
        const {dispatch, getState} = controller;
        const state = select(getState());
        return (<Container dispatch={dispatch} {...state} />);
      },
    }
  }
}

function viewProvider(controller, props, children) {
  // console.debug('Provider:view', props, children);

  const {store, Connector} = controller;
  return (<Connector {...store} />);
}

export const Provider = {
  controller(props, children) {
    // console.debug('Provider:controller', props, children);

    const {store} = props;

    this.store = store;
    if (typeof children[0] === 'function')
      this.Connector = children[0]();
    else
      this.Connector = children[0];
  },

  view: viewProvider,
}

export function redrawMiddleware() {
  return function (next) {
    return function (action) {
      next(action);
      m.redraw();
    }
  }
}

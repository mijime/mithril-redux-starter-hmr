import m from 'mithril';

class _Provider {
  view (controller, props, children) {
    const {store} = props;
    const Child = typeof children[0] === 'function' ?
      children[0]() : children[0];

    return (<Child {...store} />);
  }
}

export const Provider = new _Provider;

export function connect (selector) {
  return function _createContainer (Container) {
    return {
      view (controller, props, children) {
        const {dispatch, getState} = props;
        const state = selector(getState());

        return (<Container dispatch={dispatch} {...state} />);
      },
    };
  }
}

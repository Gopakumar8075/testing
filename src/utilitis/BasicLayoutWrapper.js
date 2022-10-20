import BasicLayout from '../components/basic-layout/basic-layout';

/**
 * This is higher order component, which takes a component as a parameter and returns new component with additional features
 * @param {jsx component} component
 * @returns jsx component
 */
export function BasicLayoutWrapper(component) {
  const Component = component;
  return function (props) {
    return (
      <>
        <BasicLayout>
          <Component {...props} />
        </BasicLayout>
      </>
    );
  };
}

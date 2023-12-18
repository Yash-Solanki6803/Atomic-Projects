import React from 'react';

type ValueTypes = string | number | boolean ;

type CaseProps<T extends ValueTypes> = {
  when: T;
  children: React.ReactNode;
};

type SwitchProps<T extends ValueTypes> = {
  check: T;
  children: React.ReactNode;
  base: React.ReactNode;
};

const Case= <T extends ValueTypes>({ children }: CaseProps<T>) :React.ReactNode|null=> {
    return <>{children}</>;
};

const Switch= <T extends ValueTypes>({ check, children, base}: SwitchProps<T>):React.ReactNode|null => {
  let caseToRender: React.ReactNode = base;

  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child) && child.type === Case) {
      const caseChild = child as React.ReactElement<CaseProps<T>>;
      if (caseChild.props.when === check) {
        caseToRender = caseChild.props.children;
      }
    }
  });

  return <>{caseToRender}</>;
};

export { Switch, Case };


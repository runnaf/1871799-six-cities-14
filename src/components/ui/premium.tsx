export type TPremiumProp = {
  classNamePremium: string;
};

export function Premium (classNamePremium: TPremiumProp): JSX.Element {
  return (
    <div className={classNamePremium.classNamePremium}>
      <span>Premium</span>
    </div>
  );
}

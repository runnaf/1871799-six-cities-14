export function UserStatus({pro}:{pro:boolean}):JSX.Element {
  return (
    <span className="offer__user-status">
      {pro ? 'Pro' : ''}
    </span>
  );
}

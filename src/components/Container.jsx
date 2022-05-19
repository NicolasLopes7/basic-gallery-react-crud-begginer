export const Container = ({ direction, children }) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: direction,
    }}
  >
    {children}
  </div>
);

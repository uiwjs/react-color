interface TitleProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function Title(props: TitleProps) {
  return (
    <div {...props} style={{ fontSize: 12, padding: '5px 0', color: '#6b6b6b', ...props.style }}>
      {props.children}
    </div>
  );
}

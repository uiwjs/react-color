interface TitleProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function Title(props: TitleProps) {
  return <div style={{ fontSize: 12, padding: '5px 0', color: '#6b6b6b' }}>{props.children}</div>;
}

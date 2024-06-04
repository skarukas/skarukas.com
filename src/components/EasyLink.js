import { Link } from 'react-router-dom';

export default function EasyLink({to, title, children, style}) {
  if (to == null) {
    return children
  } else if (to.startsWith("/")) {
    return (<Link to={to} style={style}>{children}</Link>)
  } else {
    return (<a href={to} target="_blank" rel="noreferrer" title={title} style={style}>{children}</a>)
  }
}
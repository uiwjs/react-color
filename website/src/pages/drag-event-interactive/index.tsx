import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  editorUrl = '/packages/drag-event-interactive/README.md';
  getMdStr = () => import('@uiw/react-drag-event-interactive/README.md');
}

import Markdown from '../../components/Markdown';

export class Component extends Markdown {
  editorUrl = '/packages/drag-event-interactive/README.md';
  getMdStr = () => import('@uiw/react-drag-event-interactive/README.md');
}

import Markdown from '../../components/Markdown';

export default class Page extends Markdown {
  editorUrl = '/packages/color-convert/README.md';
  getMdStr = () => import('@uiw/color-convert/README.md');
}

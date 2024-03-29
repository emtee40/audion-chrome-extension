import * as dagre from 'dagre';

import {Audion} from './Types';

export function layoutGraphContext(
  context: Audion.GraphContext,
): Audion.GraphContext {
  if (context.context && context.graph) {
    // TODO: dagre's graphlib typings are inaccurate, which is why we use
    // graphlib's types. Revert to dagre's types once the issue is fixed:
    // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/47439
    dagre.layout(context.graph as unknown as dagre.graphlib.Graph);
  }
  return context;
}

import { stackData } from '@/data';
import Card from '../ui/card';
import Tooltip from '../ui/tooltip';

export default function StackCard() {
  return (
    <Card title="Tech stack">
      <div className="flex flex-col gap-5 mt-2">
        {stackData.map((tech, i) => (
          <div key={i}>
            <p className="text-secondary-foreground text-xs uppercase tracking-wider mb-2">{tech.title}</p>
            <div className="flex gap-3 flex-wrap">
              {tech.stack.map((t) => (
                <Tooltip key={t.id} title={t.title} image={t.image} icon={t.icon} bgColor={t.bgColor} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

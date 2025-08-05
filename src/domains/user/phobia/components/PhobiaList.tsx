import type { Phobia } from '../model/phobia.types';
import PhobiaCard from './PhobiaCard';

type Props = {
  phobias: Phobia[];
};

const PhobiaList = ({ phobias }: Props) => (
  <div className="space-y-5">
    {phobias.map((phobia) => (
      <PhobiaCard key={phobia.id} phobia={phobia} />
    ))}
  </div>
);

export default PhobiaList;

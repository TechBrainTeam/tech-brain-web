import type { Phobia } from '../model/phobia.types';
import PhobiaCard from './PhobiaCard';

type Props = {
  phobias: Phobia[];
};

const PhobiaList = ({ phobias }: Props) => (
  <div className="space-y-5">
    {phobias.map((phobia, index) => (
      <PhobiaCard key={phobia.id} phobia={phobia} index={index} />
    ))}
  </div>
);

export default PhobiaList;

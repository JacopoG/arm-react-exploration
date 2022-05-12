import graphicCollapsed from '../assets/graphics/AdvancementList__Collapsed.png';
import graphicExpanded from '../assets/graphics/AdvancementList__Expanded.png';
import { Card } from './Card';

const styles = {
  backgroundImage: "url(" + graphicCollapsed + ")",
  backgroundSize: "580px",
  backgroundPosition: "-20px -17px",
  backgroundRepeat: "no-repeat",
  display: "inline-block",
}


export function WIPAdvancementList (props:any) {
  return(
    <Card>
      <div style={styles} className="w-full h-96">

        {/* HEAD */}
        <div className="flex items-center mt-4 ml-1">
          <span className="bg-black/50 inline-block w-10 h-10"></span>{/* ICON PLACEHOLDER */}
          <span className="text-4xl font-serif font-bold text-blue-400">Advancement List</span>
        </div>

        {/* BODY */}
        <div className="mt-6 ml-4">

          {/* YEAR CONTAINER */}
          <div className="flex items-center">
            <span className="bg-black/50 w-4 h-4"></span>{/* ICON PLACEHOLDER */}
            <span className="font-serif text-4xl font-bold text-blue-400 leading-none">1917</span>
          </div>

          {/* DIVIDER */}
          <div className="bg-black/50 w-8 h-2 mt-2"></div>

          {/* YEAR CONTAINER */}
          <div className="flex items-center mt-1">
            <span className="bg-black/50 w-4 h-4"></span>{/* ICON PLACEHOLDER */}
            <span className="font-serif text-4xl font-bold text-blue-400 leading-none">1918</span>
          </div>

          {/* DIVIDER */}
          <div className="bg-black/50 w-8 h-2 mt-2"></div>

          {/* YEAR CONTAINER */}
          <div className="font-serif text-4xl font-bold text-blue-400">1919</div>

          {/* DIVIDER */}
          <div className="bg-black/50 w-8 h-2 mt-2"></div>

          {/* YEAR CONTAINER */}
          <div className="font-serif text-4xl font-bold text-blue-400">1920</div>

        </div>
      </div>
    </Card>
  );
}


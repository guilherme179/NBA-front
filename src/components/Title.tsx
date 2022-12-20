import { Assistants } from "../buttons/Assistants";
import { Blocks } from "../buttons/Blocks";
import { Points } from "../buttons/Points";
import { Rebounds } from "../buttons/Rebounds";
import { Steals } from "../buttons/Steals";
import { TreePoints } from "../buttons/TreePoints";

export function Title() {

    return(
        <div className="bg-slate-200 rounded-2xl border-2">
            <div className="lg:flex p-8 border-2 rounded-md ">
                <div className="min-w-0 flex-1">
                    <h2 className="text-2xl flex justify-center font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                        Tabela de Status
                    </h2>
                </div>
            </div>
            <div className="pt-0 p-5 flex lg:mt-0 lg:ml-4 justify-center ">
                <TreePoints />
                <Points />
                <Rebounds />
                <Assistants />
                <Blocks />
                <Steals />
            </div>
        </div>
    );
}
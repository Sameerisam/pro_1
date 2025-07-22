'use client';
import History from "@/components/history/history"
import Belence from "@/components/belence/belence"
import AddNew from "@/components/addNew/addNew"
import { Provider } from "react-redux"
import { store } from "@/store/store"
export default function Page(){






    return <div>





<Provider store={store}>
<Belence></Belence>
</Provider>
<Provider store={store}>
<History></History>
</Provider>
<Provider store={store}>
<AddNew></AddNew>
</Provider>
    </div>
}
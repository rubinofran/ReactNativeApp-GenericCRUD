import { NativeRouter, Routes, Route } from "react-router-native";

import Menu from "../modules/Menu";
import ItemList from "../modules/ItemList";
import Form from "../modules/Form";

function Router() {
    return (
        <NativeRouter>
            <Routes>
                <Route exact path='/' element={<Menu />} />
                <Route exact path='/item-list' element={<ItemList />} />
                <Route exact path='/form' element={<Form />} />
            </Routes>
        </NativeRouter>
    );
}

export default Router;
import MenuItem from "../MenuItem/MenuItem";

const MenuCategory = ({menu}) => {
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {
                    menu?.map(item => <MenuItem key={item._id} item={item}></MenuItem>) 
                }
            </div>
        </div>
    );
};

export default MenuCategory;
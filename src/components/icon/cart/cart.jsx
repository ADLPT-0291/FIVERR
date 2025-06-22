import src from "./8.png";
console.log(src);
export function CartIcon() {
    console.log("icon re-run");
    return (
        <img 
            src={src} 
            width={40} 
            className="w-10 object-cover" 
        />
    );
}


export const GetCanvas = () => {
    console.log("working");
    return document.querySelector("canvas");
}

export const Lerp = (a, b, t) => {
    return a + t * (b - a);
}
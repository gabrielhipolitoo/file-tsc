"use strict";
function inforDados(id, nome, email) {
    console.log("id:", id, "...", "nome:", nome, "...");
    if (email != undefined)
        console.log("email:", email);
}
inforDados(98908, "gabriel", "c.gabmail.com");
function inforDados2(pessoa) {
    const { id, nome, idade } = pessoa;
    console.log("id:", id, "...", "nome:", nome, "...");
}

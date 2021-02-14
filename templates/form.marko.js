// Compiled using marko@4.23.13 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/crud_node$1.0.0/templates/form.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_attr = require("marko/src/runtime/html/helpers/attr"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=pt-br><head><meta charset=UTF-8><meta http-equiv=X-UA-Compatible content=IE=edge><meta name=viewport content=\"width=device-width, initial-scale=1.0\"><title>Cadastro</title></head><body><h1>Cadastro</h1><br><form action=/alunos method=post><input type=hidden name=id" +
    marko_attr("value", data.id) +
    "><input type=text name=nome placeholder=nome" +
    marko_attr("value", data.nome) +
    "><input type=email name=email placeholder=email" +
    marko_attr("value", data.email) +
    "><select name=curso value><option value" +
    marko_attr("selected", data.curso == "") +
    " disabled></option><option value=ads" +
    marko_attr("selected", data.curso == "ads") +
    ">Tecnólogo em ADS</option><option value=ipi" +
    marko_attr("selected", data.curso == "ipi") +
    ">Tec. em Informática para Internet</option><option value=qualidade" +
    marko_attr("selected", data.curso == "qualidade") +
    ">Tec. em Gestão de Qualidade</option></select><button type=reset>Cancelar</button><button type=submit>Salvar</button></form>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "20");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/crud_node$1.0.0/templates/form.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };

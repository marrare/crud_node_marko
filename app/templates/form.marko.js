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

  out.w("<!DOCTYPE html><html lang=pt-br><head><meta charset=UTF-8><meta http-equiv=X-UA-Compatible content=IE=edge><meta name=viewport content=\"width=device-width, initial-scale=1.0\"><title>Cadastro</title><link rel=stylesheet href=https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css><link href=https://fonts.googleapis.com/icon?family=Material+Icons rel=stylesheet></head><body><div class=container><h1>Cadastro</h1><br><form action=/aluno method=post><input type=hidden name=id" +
    marko_attr("value", data.id) +
    "><input type=text name=nome placeholder=nome" +
    marko_attr("value", data.nome) +
    " required><input type=email name=email placeholder=email" +
    marko_attr("value", data.email) +
    " required><p><label><input name=curso type=radio value=ads" +
    marko_attr("checked", data.curso == "ads") +
    "><span>Tecnólogo em ADS</span></label></p><p><label><input name=curso type=radio value=qualidade" +
    marko_attr("checked", data.curso == "qualidade") +
    "><span>Tec. em Gestão de Qualidade</span></label></p><p><label><input name=curso type=radio value=ipi" +
    marko_attr("checked", data.curso == "ipi") +
    "><span>Tec. em Informática para Internet</span></label></p><a href=/  style=\"margin-right: 10pt;\" class=\"waves-effect waves-light btn red\">Cancelar</a><button class=\"waves-effect waves-light btn blue\" type=submit>Salvar</button></form></div><script src=https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js>\n    </script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "30");

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

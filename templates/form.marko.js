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

  out.w("<!DOCTYPE html><html lang=pt-br><head><meta charset=UTF-8><meta http-equiv=X-UA-Compatible content=IE=edge><meta name=viewport content=\"width=device-width, initial-scale=1.0\"><title>Cadastro</title><link rel=stylesheet href=https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css integrity=sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm crossorigin=anonymous><script src=https://code.jquery.com/jquery-3.2.1.slim.min.js integrity=sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN crossorigin=anonymous></script><script src=https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js integrity=sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl crossorigin=anonymous></script></head><body><div class=container><h1>Cadastro</h1><br><form action=/alunos method=post><div class=form-group><input type=hidden name=id" +
    marko_attr("value", data.id) +
    "></div><div class=form-group><input type=text name=nome placeholder=nome" +
    marko_attr("value", data.nome) +
    "></div><div class=form-group><input type=email name=email placeholder=email" +
    marko_attr("value", data.email) +
    "></div><div class=form-group><select name=curso value><option value" +
    marko_attr("selected", data.curso == "") +
    " disabled></option><option value=ads" +
    marko_attr("selected", data.curso == "ads") +
    ">Tecnólogo em ADS</option><option value=ipi" +
    marko_attr("selected", data.curso == "ipi") +
    ">Tec. em Informática para Internet</option><option value=qualidade" +
    marko_attr("selected", data.curso == "qualidade") +
    ">Tec. em Gestão de Qualidade</option></select></div><button class=\"btn btn-danger\" type=reset>Cancelar</button><button class=\"btn btn-success\" type=submit>Salvar</button></form></div>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "26");

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

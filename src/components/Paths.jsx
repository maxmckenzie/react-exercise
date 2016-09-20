import React from 'react';
import logger from '../helpers/logger';

function getFields(method) {
  logger.info(method);
  return Object.keys(method).map((fieldKey, fieldIndex) => (
    <div key={fieldIndex}>
    {fieldKey}
    </div>
  ));
}

function getMethods(path) {
  return Object.keys(path).map((methodKey, methodIndex) => (
    <div key={methodIndex}>
      <h3>{ methodKey }</h3>
      { getFields(path[methodKey]) }
    </div>
  ));
}

function getPaths(paths) {
  return Object.keys(paths).map((pathKey, pathIndex) => (
    <div key={pathIndex}>
      <h2>{ pathKey }</h2>
      { getMethods(paths[pathKey]) }
    </div>
  ));
}

export default function Paths({ paths = {} }){
  return (
    <div>
      <h1>Paths</h1>
      { getPaths(paths) }
    </div>
  )
}

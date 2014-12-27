﻿/// <reference path="../../../NovaBurst.ModularTypeScript.Core.UI/modules/Core/init.ts" />
/// <reference path="../../../NovaBurst.ModularTypeScript.Person.UI/modules/Person/init.ts" />
/// <reference path="../../../NovaBurst.ModularTypeScript.Sales.UI/modules/Sales/init.ts" />
/// <reference path="controllers/FrontController.ts" />

import Core = require('../../../NovaBurst.ModularTypeScript.Core.UI/modules/Core/init');
import Person = require('../../../NovaBurst.ModularTypeScript.Person.UI/modules/Person/init');
import Sales = require('../../../NovaBurst.ModularTypeScript.Sales.UI/modules/Sales/init');
Core;
Person;
Sales;

import Module = require('../../../NovaBurst.ModularTypeScript.Core.UI/modules/Core/utility/Module');
Module.ModuleLoader.loadModule('Front', 'NovaBurst.ModularTypeScript.Front');

import Front = NovaBurst.ModularTypeScript.Front;
export = Front;
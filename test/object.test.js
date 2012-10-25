var should = require('chai').should()
  , assert = require('chai').assert
  , _ = require('underscore')
  , createObject = require('../object/createObject');


describe('Object', function () {

  it('#getKey should return error if a parameter is missing', function (done) {
    var params1 = { comportement: 'C1' , ampleur: 10 , etalement: '1' , tva: 5 , csg: 5 , taxecarbone: 4 }
      , params2 = { ciblage: 'A1' , ampleur: 10 , etalement: '1' , tva: 5 , csg: 5 , taxecarbone: 4 }
      , params3 = { ciblage: 'A1' , comportement: 'C1' , etalement: '1' , tva: 5 , csg: 5 , taxecarbone: 4 }
      , params4 = { ciblage: 'A1' , comportement: 'C1' , ampleur: 10 , tva: 5 , csg: 5 , taxecarbone: 4 }
      , params5 = { ciblage: 'A1' , comportement: 'C1' , ampleur: 10 , etalement: '1' , csg: 5 , taxecarbone: 4 }
      , params6 = { ciblage: 'A1' , comportement: 'C1' , ampleur: 10 , etalement: '1' , tva: 5 , taxecarbone: 4 }
      , params7 = { ciblage: 'A1' , comportement: 'C1' , ampleur: 10 , etalement: '1' , tva: 5 , csg: 5 };

    createObject.getKey(params1).should.equal('error');
    createObject.getKey(params2).should.equal('error');
    createObject.getKey(params3).should.equal('error');
    createObject.getKey(params4).should.equal('error');
    createObject.getKey(params5).should.equal('error');
    createObject.getKey(params6).should.equal('error');
    createObject.getKey(params7).should.equal('error');

    done();
  });

  it('#getKey should return nice key if all parameters are here, even if one is 0', function (done) {
    var params1 = { ciblage: 'A1', comportement: 'C1' , ampleur: 10 , etalement: '1' , tva: 5 , csg: 5 , taxecarbone: 4 }
      , params2 = { ciblage: 'A1', comportement: 'C1' , ampleur: 10 , etalement: '1' , tva: 5 , csg: 5 , taxecarbone: 0 };

    createObject.getKey(params1).should.not.equal('error');
    createObject.getKey(params2).should.not.equal('error');

    done();
  });


})

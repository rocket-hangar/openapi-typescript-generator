/* eslint-disable */
/**
 * OpenAPI Petstore
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
 *
 * The version of the OpenAPI document: 1.0.0
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * Do not edit the class manually.
 */

import { TypeSerializer } from '@rocket-scripts/openapi';

import { AdditionalPropertiesClassModel } from './models/AdditionalPropertiesClass';
import { AnimalModel } from './models/Animal';
import { AppleModel } from './models/Apple';
import { AppleReqModel } from './models/AppleReq';
import { ArrayOfArrayOfNumberOnlyModel } from './models/ArrayOfArrayOfNumberOnly';
import { ArrayOfNumberOnlyModel } from './models/ArrayOfNumberOnly';
import { ArrayTestModel } from './models/ArrayTest';
import { BananaModel } from './models/Banana';
import { BananaReqModel } from './models/BananaReq';
import { BasquePigModel } from './models/BasquePig';
import { CapitalizationModel } from './models/Capitalization';
import { CatModel } from './models/Cat';
import { CatAllOfModel } from './models/CatAllOf';
import { CategoryModel } from './models/Category';
import { ChildCatModel } from './models/ChildCat';
import { ChildCatAllOfModel } from './models/ChildCatAllOf';
import { ClassModelModel } from './models/ClassModel';
import { ClientModel } from './models/Client';
import { ComplexQuadrilateralModel } from './models/ComplexQuadrilateral';
import { ComposedOneOfNumberWithValidationsModel } from './models/ComposedOneOfNumberWithValidations';
import { DanishPigModel } from './models/DanishPig';
import { DogModel } from './models/Dog';
import { DogAllOfModel } from './models/DogAllOf';
import { DrawingModel } from './models/Drawing';
import { EnumArraysModel } from './models/EnumArrays';
import { EnumClassModel } from './models/EnumClass';
import { EnumTestModel } from './models/EnumTest';
import { EquilateralTriangleModel } from './models/EquilateralTriangle';
import { FileSchemaTestClassModel } from './models/FileSchemaTestClass';
import { FooModel } from './models/Foo';
import { FormatTestModel } from './models/FormatTest';
import { FruitModel } from './models/Fruit';
import { FruitReqModel } from './models/FruitReq';
import { GmFruitModel } from './models/GmFruit';
import { GrandparentAnimalModel } from './models/GrandparentAnimal';
import { HasOnlyReadOnlyModel } from './models/HasOnlyReadOnly';
import { HealthCheckResultModel } from './models/HealthCheckResult';
import { InlineObjectModel } from './models/InlineObject';
import { InlineObject1Model } from './models/InlineObject1';
import { InlineObject2Model } from './models/InlineObject2';
import { InlineObject3Model } from './models/InlineObject3';
import { InlineObject4Model } from './models/InlineObject4';
import { InlineObject5Model } from './models/InlineObject5';
import { InlineResponseDefaultModel } from './models/InlineResponseDefault';
import { IntegerEnumModel } from './models/IntegerEnum';
import { IntegerEnumOneValueModel } from './models/IntegerEnumOneValue';
import { IntegerEnumWithDefaultValueModel } from './models/IntegerEnumWithDefaultValue';
import { IsoscelesTriangleModel } from './models/IsoscelesTriangle';
import { ListModel } from './models/List';
import { MammalModel } from './models/Mammal';
import { MapTestModel } from './models/MapTest';
import { MixedPropertiesAndAdditionalPropertiesClassModel } from './models/MixedPropertiesAndAdditionalPropertiesClass';
import { Model200ResponseModel } from './models/Model200Response';
import { ModelApiResponseModel } from './models/ModelApiResponse';
import { ModelFileModel } from './models/ModelFile';
import { NameModel } from './models/Name';
import { NullableClassModel } from './models/NullableClass';
import { NullableShapeModel } from './models/NullableShape';
import { NumberOnlyModel } from './models/NumberOnly';
import { ObjectModelWithRefPropsModel } from './models/ObjectModelWithRefProps';
import { OrderModel } from './models/Order';
import { ParentPetModel } from './models/ParentPet';
import { PetModel } from './models/Pet';
import { PigModel } from './models/Pig';
import { QuadrilateralModel } from './models/Quadrilateral';
import { QuadrilateralInterfaceModel } from './models/QuadrilateralInterface';
import { ReadOnlyFirstModel } from './models/ReadOnlyFirst';
import { ReturnModel } from './models/Return';
import { ScaleneTriangleModel } from './models/ScaleneTriangle';
import { ShapeModel } from './models/Shape';
import { ShapeInterfaceModel } from './models/ShapeInterface';
import { ShapeOrNullModel } from './models/ShapeOrNull';
import { SimpleQuadrilateralModel } from './models/SimpleQuadrilateral';
import { SpecialModelNameModel } from './models/SpecialModelName';
import { StringEnumModel } from './models/StringEnum';
import { StringEnumWithDefaultValueModel } from './models/StringEnumWithDefaultValue';
import { TagModel } from './models/Tag';
import { TriangleModel } from './models/Triangle';
import { TriangleInterfaceModel } from './models/TriangleInterface';
import { UserModel } from './models/User';
import { WhaleModel } from './models/Whale';
import { ZebraModel } from './models/Zebra';

export const typeSerializer = new TypeSerializer({
  AdditionalPropertiesClass: AdditionalPropertiesClassModel,
  Animal: AnimalModel,
  Apple: AppleModel,
  AppleReq: AppleReqModel,
  ArrayOfArrayOfNumberOnly: ArrayOfArrayOfNumberOnlyModel,
  ArrayOfNumberOnly: ArrayOfNumberOnlyModel,
  ArrayTest: ArrayTestModel,
  Banana: BananaModel,
  BananaReq: BananaReqModel,
  BasquePig: BasquePigModel,
  Capitalization: CapitalizationModel,
  Cat: CatModel,
  CatAllOf: CatAllOfModel,
  Category: CategoryModel,
  ChildCat: ChildCatModel,
  ChildCatAllOf: ChildCatAllOfModel,
  ClassModel: ClassModelModel,
  Client: ClientModel,
  ComplexQuadrilateral: ComplexQuadrilateralModel,
  ComposedOneOfNumberWithValidations: ComposedOneOfNumberWithValidationsModel,
  DanishPig: DanishPigModel,
  Dog: DogModel,
  DogAllOf: DogAllOfModel,
  Drawing: DrawingModel,
  EnumArrays: EnumArraysModel,
  EnumClass: EnumClassModel,
  EnumTest: EnumTestModel,
  EquilateralTriangle: EquilateralTriangleModel,
  FileSchemaTestClass: FileSchemaTestClassModel,
  Foo: FooModel,
  FormatTest: FormatTestModel,
  Fruit: FruitModel,
  FruitReq: FruitReqModel,
  GmFruit: GmFruitModel,
  GrandparentAnimal: GrandparentAnimalModel,
  HasOnlyReadOnly: HasOnlyReadOnlyModel,
  HealthCheckResult: HealthCheckResultModel,
  InlineObject: InlineObjectModel,
  InlineObject1: InlineObject1Model,
  InlineObject2: InlineObject2Model,
  InlineObject3: InlineObject3Model,
  InlineObject4: InlineObject4Model,
  InlineObject5: InlineObject5Model,
  InlineResponseDefault: InlineResponseDefaultModel,
  IntegerEnum: IntegerEnumModel,
  IntegerEnumOneValue: IntegerEnumOneValueModel,
  IntegerEnumWithDefaultValue: IntegerEnumWithDefaultValueModel,
  IsoscelesTriangle: IsoscelesTriangleModel,
  List: ListModel,
  Mammal: MammalModel,
  MapTest: MapTestModel,
  MixedPropertiesAndAdditionalPropertiesClass: MixedPropertiesAndAdditionalPropertiesClassModel,
  Model200Response: Model200ResponseModel,
  ModelApiResponse: ModelApiResponseModel,
  ModelFile: ModelFileModel,
  Name: NameModel,
  NullableClass: NullableClassModel,
  NullableShape: NullableShapeModel,
  NumberOnly: NumberOnlyModel,
  ObjectModelWithRefProps: ObjectModelWithRefPropsModel,
  Order: OrderModel,
  ParentPet: ParentPetModel,
  Pet: PetModel,
  Pig: PigModel,
  Quadrilateral: QuadrilateralModel,
  QuadrilateralInterface: QuadrilateralInterfaceModel,
  ReadOnlyFirst: ReadOnlyFirstModel,
  Return: ReturnModel,
  ScaleneTriangle: ScaleneTriangleModel,
  Shape: ShapeModel,
  ShapeInterface: ShapeInterfaceModel,
  ShapeOrNull: ShapeOrNullModel,
  SimpleQuadrilateral: SimpleQuadrilateralModel,
  SpecialModelName: SpecialModelNameModel,
  StringEnum: StringEnumModel,
  StringEnumWithDefaultValue: StringEnumWithDefaultValueModel,
  Tag: TagModel,
  Triangle: TriangleModel,
  TriangleInterface: TriangleInterfaceModel,
  User: UserModel,
  Whale: WhaleModel,
  Zebra: ZebraModel,
});

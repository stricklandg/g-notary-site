/**
 * Created by gregorydrake on 6/19/16.
 */
import { Mongo } from 'meteor/mongo';
const ClientErrors = new Mongo.Collection('client-errors');
export default ClientErrors;
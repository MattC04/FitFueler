import { defineBackend } from '@aws-amplify/backend';
import { auth } from 'aws-amplify';
import { storage } from './storage/resource';

defineBackend({
  auth,
  storage
});
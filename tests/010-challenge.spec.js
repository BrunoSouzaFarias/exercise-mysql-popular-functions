const Importer = require('mysql-import');
const { Sequelize } = require('sequelize');
const { readFileSync } = require('fs');
const mysql = require('mysql2/promise');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

describe('', () => {
  let sequelize;

  beforeAll(async () => {
    const importer = new Importer({
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      host: process.env.MYSQL_HOSTNAME,
      port: process.env.PORT
    });

    await importer.import('./tests/assets/hr.sql');
    importer.disconnect();

    sequelize = new Sequelize('hr', process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, { host: process.env.MYSQL_HOSTNAME, port: process.env.PORT, dialect: 'mysql' })
  });

  it('10 - Exiba a média salarial e o número de funcionários de todos os departamentos com mais de dez funcionários', async () => {
    const challengeQuery = readFileSync(path.resolve(__dirname, '../challenge/exercise-10.sql'), 'utf8',).trim();
    const expectResult = require('./expected_result/challengeResult');
    const dbResult = await sequelize.query(challengeQuery, { type: 'SELECT' })
    expect(dbResult).toEqual(expectResult);
  });
});
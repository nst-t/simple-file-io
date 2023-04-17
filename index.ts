import minimist from "minimist";
import { NstrumentaClient } from "nstrumenta";
import { createFFmpeg, fetchFile } from "@ffmpeg/ffmpeg";
import { readFile, writeFile, mkdir } from "fs/promises";
import path from 'path'

const argv = minimist(process.argv.slice(2));
const input: string = argv.input;
const nstClient = new NstrumentaClient();

console.log({ input })
console.log(nstClient.storage?.list('data'));


/**
 * 文件系统相关实用方法
 */

import path from 'path';
import * as fs from 'fs-extra';
import * as json5 from 'json5';
import fetch from 'node-fetch';

import * as check from './check';

export * from 'fs-extra';

/**
 * 根据name格式获取文件内容
 * @param file 文件url, 相对/绝对路径, type根据类型不同获取文件路径或url
 * @param encoding
 */
export async function resolveFile(file: string, encoding = 'utf-8') {
  // 绝对路径
  let _file = file;
  let _data: any;
  let _encoding = encoding;
  if (!encoding || encoding === 'json') _encoding = 'utf-8';

  if (check.isRelativePath(file)) {
    _file = path.join(process.cwd(), file);
  }

  if (check.isAbsolutePath(_file)) {
    _data = await fs.readFile(_file, _encoding);
  } else if (check.isUrl(file)) {
    const resp = await fetch(file);

    switch (encoding) {
      case 'buffer':
        _data = await resp.buffer();
        break;
      default:
        _data = await resp.text();
        break;
    }
  }

  if (!_data) return _data;

  if (encoding === 'json') _data = json5.parse(_data);

  return _data;
}

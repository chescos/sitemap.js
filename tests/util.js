"use strict";
/**
 * Created by user on 2019/5/29.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
exports.CACHE_FILE = path.join(__dirname, `~tempFile.tmp`);
function createCache() {
  const stat = truncateSync(exports.CACHE_FILE);
  return {
    cacheFile: exports.CACHE_FILE,
    stat,
  };
}
exports.createCache = createCache;
function unlinkCache() {
  return fs.unlinkSync(exports.CACHE_FILE);
}
exports.unlinkCache = unlinkCache;
function truncateSync(file) {
  const tempFile = fs.openSync(file, 'w');
  fs.closeSync(tempFile);
  const stat = fs.statSync(file);
  return stat;
}
exports.truncateSync = truncateSync;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOztHQUVHOztBQUVILHlCQUF5QjtBQUV6Qiw2QkFBNkI7QUFFaEIsUUFBQSxVQUFVLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsZUFBZSxDQUFDLENBQUM7QUFFaEUsU0FBZ0IsV0FBVztJQUUxQixJQUFJLElBQUksR0FBRyxZQUFZLENBQUMsa0JBQVUsQ0FBQyxDQUFBO0lBRW5DLE9BQU87UUFDTixTQUFTLEVBQUUsa0JBQVU7UUFDckIsSUFBSTtLQUNKLENBQUE7QUFDRixDQUFDO0FBUkQsa0NBUUM7QUFFRCxTQUFnQixXQUFXO0lBRTFCLE9BQU8sRUFBRSxDQUFDLFVBQVUsQ0FBQyxrQkFBVSxDQUFDLENBQUE7QUFDakMsQ0FBQztBQUhELGtDQUdDO0FBRUQsU0FBZ0IsWUFBWSxDQUFDLElBQVk7SUFFeEMsTUFBTSxRQUFRLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUE7SUFDdkMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUV2QixNQUFNLElBQUksR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRS9CLE9BQU8sSUFBSSxDQUFBO0FBQ1osQ0FBQztBQVJELG9DQVFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IHVzZXIgb24gMjAxOS81LzI5LlxuICovXG5cbmltcG9ydCBmcyA9IHJlcXVpcmUoJ2ZzJylcbmltcG9ydCB6bGliID0gcmVxdWlyZSgnemxpYicpXG5pbXBvcnQgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKVxuXG5leHBvcnQgY29uc3QgQ0FDSEVfRklMRSA9IHBhdGguam9pbihfX2Rpcm5hbWUsIGB+dGVtcEZpbGUudG1wYCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDYWNoZSgpXG57XG5cdGxldCBzdGF0ID0gdHJ1bmNhdGVTeW5jKENBQ0hFX0ZJTEUpXG5cblx0cmV0dXJuIHtcblx0XHRjYWNoZUZpbGU6IENBQ0hFX0ZJTEUsXG5cdFx0c3RhdCxcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5saW5rQ2FjaGUoKVxue1xuXHRyZXR1cm4gZnMudW5saW5rU3luYyhDQUNIRV9GSUxFKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdHJ1bmNhdGVTeW5jKGZpbGU6IHN0cmluZylcbntcblx0Y29uc3QgdGVtcEZpbGUgPSBmcy5vcGVuU3luYyhmaWxlLCAndycpXG5cdGZzLmNsb3NlU3luYyh0ZW1wRmlsZSk7XG5cblx0Y29uc3Qgc3RhdCA9IGZzLnN0YXRTeW5jKGZpbGUpO1xuXG5cdHJldHVybiBzdGF0XG59XG4iXX0=
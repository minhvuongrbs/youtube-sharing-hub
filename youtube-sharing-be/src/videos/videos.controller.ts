import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { VideosService } from './videos.service';

@Controller('videos')
export class VideosController {
  constructor(private readonly videoService: VideosService) {}
  @Get()
  showAllVideos() {
    return this.videoService.showAllVideos();
  }

  @Post()
  @UseGuards(JwtAuthGuard)
  shareNewVideo(@Request() req) {
    return this.videoService.shareNewVideo(req.body, req.user);
  }
}

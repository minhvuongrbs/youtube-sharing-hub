import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JWTAuthenticationBody } from 'src/auth/jwt.strategy';
import { Repository } from 'typeorm';
import { VideoEntity } from './video.entity';

@Injectable()
export class VideosService {
  constructor(
    @InjectRepository(VideoEntity)
    private readonly videosRepository: Repository<VideoEntity>,
  ) {}
  showAllVideos() {
    return this.videosRepository.find({ order: { createdAt: 'DESC' } });
  }

  shareNewVideo(reqBody, user?: JWTAuthenticationBody) {
    return this.videosRepository.insert({
      youtubeUrl: reqBody.youtubeUrl,
      shareBy: user.email,
    });
  }
}
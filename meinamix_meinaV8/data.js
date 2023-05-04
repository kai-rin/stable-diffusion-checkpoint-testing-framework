rawData = {"title": "Stable Diffusion model validation framework for image generation v1.1", "description": "A framework for structuring the validation of image-generated AI models, in an attempt to mechanize the validation of AI-generated models and make them easily reproducible.", "ext": "png", "min_width": 512, "min_height": 768, "defaults": {"show_descriptions": true, "autoscale": false, "sticky": false, "x": "", "y": "", "x2": "", "y2": ""}, "metadata": {"sampler": "DPM++ SDE Karras", "seed": 402016502, "restorefaces": null, "steps": 30, "cfgscale": 7, "model": "1st_meinamix_meinaV8", "vae": null, "width": 512, "height": 768, "prompt": "", "negativeprompt": "", "varseed": null, "varstrength": null, "clipskip": 1, "codeformerweight": 0.2, "denoising": null, "eta": null, "sigmachurn": 0.0, "sigmatmin": 0.0, "sigmatmax": null, "sigmanoise": 1.0, "ENSD": 31337}, "axes": [{"id": "sampler", "title": "sampler", "description": "", "values": [{"key": "1", "title": "DPM++ 2M Karras", "description": "", "show": true, "params": {"sampler": "DPM++ 2M Karras"}}, {"key": "2", "title": "DPM++ SDE Karras", "description": "", "show": true, "params": {"sampler": "DPM++ SDE Karras"}}]}, {"id": "seed", "title": "seed", "description": "", "values": [{"key": "1", "title": 1234, "description": "", "show": true, "params": {"seed": 1234}}, {"key": "2", "title": 5678, "description": "", "show": true, "params": {"seed": 5678}}, {"key": "3", "title": 9012, "description": "", "show": true, "params": {"seed": 9012}}]}, {"id": "prompt", "title": "prompt", "description": "", "values": [{"key": "1", "title": "1girl,", "description": "", "show": true, "params": {"prompt": "1girl,"}}, {"key": "2", "title": "absurdres, highres, ultra detailed, (1girl:1.3),", "description": "", "show": true, "params": {"prompt": "absurdres, highres, ultra detailed, (1girl:1.3),"}}, {"key": "3", "title": "((masterpiece:1.4, best quality)),((masterpiece, best quality)),(photo realistic:1.4),1girl,", "description": "", "show": true, "params": {"prompt": "((masterpiece:1.4, best quality)),((masterpiece, best quality)),(photo realistic:1.4),1girl,"}}]}, {"id": "negative_prompt", "title": "negative prompt", "description": "", "values": [{"key": "1", "title": "EasyNegative, nsfw,", "description": "", "show": true, "params": {"negativeprompt": "EasyNegative, nsfw,"}}, {"key": "2", "title": "EasyNegative, (worst quality, low quality:1.4), underwear, nsfw,", "description": "", "show": true, "params": {"negativeprompt": "EasyNegative, (worst quality, low quality:1.4), underwear, nsfw,"}}, {"key": "3", "title": "(worst quality:2, low quality, panties, nipples, nsfw:2), (zombie, sketch, interlocked fingers, comic),", "description": "", "show": true, "params": {"negativeprompt": "(worst quality:2, low quality, panties, nipples, nsfw:2), (zombie, sketch, interlocked fingers, comic),"}}, {"key": "4", "title": "EasyNegativeV2, nsfw,", "description": "", "show": true, "params": {"negativeprompt": "EasyNegativeV2, nsfw,"}}]}, {"id": "clip_skip", "title": "clip skip", "description": "", "values": [{"key": "1", "title": 1, "description": "", "show": true, "params": {"clipskip": 1}}, {"key": "2", "title": 2, "description": "", "show": true, "params": {"clipskip": 2}}]}]}
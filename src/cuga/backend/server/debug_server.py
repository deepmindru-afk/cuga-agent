from cuga.config import settings
from main import app


def main():
    """Main entry point for the server"""
    import uvicorn

    from cuga.config import settings

    # Get the port from settings, default to 8005 if not available
    port = getattr(settings, 'server_ports', None)
    if port:
        port = getattr(port, 'demo', 8005)
    else:
        port = 8005

    uvicorn.run(app, host="0.0.0.0", port=port, reload=False, log_level="info")


if __name__ == "__main__":
    # if getattr(settings.advanced_features, "use_extension", False):
    main()
